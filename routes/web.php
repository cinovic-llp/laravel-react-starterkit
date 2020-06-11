<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\User;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::group(['middleware' => ['auth']], function ($route) {
    Route::get('/', function () {
        return view('react');
    });
});


Route::group(['prefix' => 'api', 'middleware' => ['auth']], function ($route) {
    Route::get('/user', function () {
        $user = Auth::user();
        return $user;
    });

    Route::get('/users', function (\Illuminate\Http\Request $request) {
        $query = User::orderBy($request->column, $request->order);
        $users = $query->paginate($request->per_page ?? 5);
        return $users;
    });
});


Auth::routes();
