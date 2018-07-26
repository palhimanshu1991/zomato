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
    Route::post('ratings', 'ReviewsController@postRating');
    Route::post('reviews', 'ReviewsController@postReviews');
    Route::get('reviews/{id}','ReviewsController@show');
    Route::post('reviews/{id}/comment','ReviewsController@createReviewComment');
    Route::post('reviews/{id}/like','ReviewsController@like');
    Route::get('/restaurants', 'RestaurantsController@index');
    Route::post('/restaurants/create', 'RestaurantsController@store');
    Route::get('/restaurants/{id}', 'RestaurantsController@show');
    Route::get('/categories', 'CategoriesController@index');
    Route::post('/categories/create', 'CategoriesController@store');


>>>>>>> Temporary merge branch 2
