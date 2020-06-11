<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth']], function ($route) {

});


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
