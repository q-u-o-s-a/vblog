<?php


/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/v1/posts/', 'PostController@index');

$router->get('/v1/login/', 'UserController@login');

$router->group(['prefix' => '/v1/', 'middleware' => 'auth'],
    function () use ($router) {
        $router->get('/post/show', 'PostController@show');
        $router->get('/post', 'PostController@store');
        $router->get('/post/update', 'PostController@update');
        $router->get('/post/delete', 'PostController@destroy');
    });
