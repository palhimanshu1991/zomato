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
Route::post('image-upload/{id}', 'ImagesController@createImage');
Route::get('image', 'ImagesController@getImage');
Route::get('image/{id}', 'ImagesController@getImage');

Route::group(['middleware' => 'auth:api'],
    function () {

        //Reviews

        Route::post('reviews/{id}', 'ReviewsController@postReview');
        Route::get('reviews/{id}', 'ReviewsController@show');
        Route::get('restaurants/{id}/reviews','ReviewsController@index');


        Route::post('comment/{id}', 'CommentsController@createReviewComment');
        Route::post('like/{id}', 'LikesController@createReviewLike');


        Route::get('restaurants', 'RestaurantsController@index');
        Route::post('/restaurants/create', 'RestaurantsController@store');
        Route::get('/restaurants/{id}', 'RestaurantsController@show');
        Route::post('/restaurants/{id}/update', 'RestaurantsController@update');


        Route::get('/categories', 'CategoriesController@index');
        Route::post('/categories/create', 'CategoriesController@store');

        //UserAddress
        Route::get('/useraddress', 'UserAddressController@index');
        Route::post('/useraddress', 'UserAddressController@store');
        Route::put('/useraddress/{id}','UserAddressController@update');
        Route::get('/useraddress/{id}', 'UserAddressController@show');
        Route::delete('useraddress/{id}', 'UserAddressController@destroy');

        Route::post('cuisines/create/', 'CuisinesController@store');
        Route::get('cuisines', 'CuisinesController@index');

       // Route::get('image')
   


        Route::get('details','PassportController@details');
        Route::post('details','PassportController@updateDetails');

        //State
        Route::get('states','StateController@index');
        Route::get('districts','DistrictController@index');

       


        
        


    });


