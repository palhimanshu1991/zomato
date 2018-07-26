<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/restaurants', 'RestaurantsController@index');

Route::post('/restaurants/create', 'RestaurantsController@store');


Route::get('/categories', 'RestaurantsController@index');

Route::post('/Categories/create', 'RestaurantsController@store');
