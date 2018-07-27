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

Route::post('login', 'PassportController@login');
Route::post('register', 'PassportController@register');

Route::group(['middleware' => 'auth:api'], function () {

    //Reviews

    Route::get('reviews/post', 'ReviewsController@postRating');
    Route::post('ratings', 'ReviewsController@postRating');
    Route::post('reviews', 'ReviewsController@postReview');
    Route::get('reviews/{id}', 'ReviewsController@show');

    Route::post('reviews/comment/{id}', 'ReviewsController@createReviewComment');
    Route::post('reviews/like/{id}', 'ReviewsController@createReviewLike');
    Route::post('/reviews/images/{id}', 'ImagesController@createReviewImage');

    Route::get('/restaurants', 'RestaurantsController@index');
    Route::post('/restaurants/create', 'RestaurantsController@store');
    Route::get('/restaurants/{id}', 'RestaurantsController@show');
    Route::post('/restaurants/images/{id}', 'ImagesController@createRestaurantImage');

    Route::get('/categories', 'CategoriesController@index');
    Route::post('/categories/create', 'CategoriesController@store');


});


