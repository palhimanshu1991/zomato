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

Route::group([], function () {

    //Reviews
    Route::get('reviews', 'ReviewsController@index');
    Route::get('reviews/post', 'ReviewsController@postRating');
    Route::post('reviews', 'ReviewsController@store');
    Route::get('reviews/{id}','ReviewsController@show');
    Route::post('reviews/{id}/comment','ReviewsController@comment');
    Route::post('reviews/{id}/like','ReviewsController@like');


});


