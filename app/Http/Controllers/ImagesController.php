<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CreateImageRequest;
use App\Tasks\CreateImageTask;
use App\Restaurant;
use App\Review;

class ImagesController extends Controller
{


    public function createReviewImage(CreateImageRequest $request, $id)
    {
        $review = Review::find($id);
        $task = (new CreateImageTask($request, $review));
        $task->handle();
        return "success";

    }

    public function createRestaurantImage(CreateImageRequest $request, $id)
    {
        $restaurant = Restaurant::find($id);
        $task = (new CreateImageTask($request, $restaurant));
        $task->handle();
        return "success";
    }


}