<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CreateImageRequest;
use App\Tasks\CreateImageTask;
use App\Restaurant;
use App\Review;
use Illuminate\Support\Facades\Storage;

class ImagesController extends Controller
{


    public function createReviewImage(CreateImageRequest $request, $id)
    {
        $review = Review::find($id);

        $ext = $request->image->extension();

        $imageurl = Storage::putFileAs(
            'media', $request->file('image'), "review_" . $id . "." . $ext
        );
        $task = (new CreateImageTask($imageurl, $review));
        $task->handle();
        return "success";

    }

    public function createRestaurantImage(CreateImageRequest $request, $id)
    {
        $restaurant = Restaurant::find($id);

        $ext = $request->image->extension();

        $imageurl = Storage::putFileAs(
            'media', $request->file('image'), "restaurant_" . $id . "." . $ext
        );
        $task = (new CreateImageTask($imageurl, $restaurant));
        $task->handle();
        return "success";
    }

}