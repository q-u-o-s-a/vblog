<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    //VALIDACJA!!!

    //Błedy

    //auth

    private $userModel;

    public function __construct(User $userModel)
    {
        $this->userModel = $userModel;
    }

    public function login(Request $request)
    {
        $loggedUser = $this->userModel->where('username', $request->get('username'))->where('password', $request->get('password'))->firstOrFail();

        $loggedUser->api_token = $this->generateApiToken(16);
        $loggedUser->save();

        return response()
            ->json(['api_token' => $loggedUser->api_token])
            ->setCallback('postLogin');
    }

    private function generateApiToken(int $length)
    {
        return base_convert(bin2hex(random_bytes($length)), 16, 36);
    }
}
