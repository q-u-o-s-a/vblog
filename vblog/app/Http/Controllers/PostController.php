<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    //VALIDACJA!!!

    //Błedy

    private $postModel;

    public function __construct(Post $postModel)
    {
        $this->postModel = $postModel;
    }

    public function index()
    {
        return response()
            ->json($this->postModel->getListPerPage())
            ->setCallback('index');
    }

    public function show(Request $request)
    {
        return response()
            ->json($this->postModel->getOne($request->get('id')))
            ->setCallback('show');
    }

    public function store(Request $request)
    {
        $this->postModel->createNew($request->get('title'), $request->get('text'));

        return response()
            ->json("OK")
            ->setCallback('store');
    }

    public function update(Request $request)
    {
        $blogPost = $this->postModel->getOne($request->get('id'));
        $blogPost->title = $request->get('title');
        $blogPost->text = $request->get('text');
        $blogPost->save();

        return response()
            ->json("OK")
            ->setCallback('update');
    }

    public function destroy(Request $request)
    {
        $blogPost = $this->postModel->getOne($request->get('id'));
        $result = $blogPost->delete();

        return response()
            ->json($result)
            ->setCallback('destroy');
    }
}
