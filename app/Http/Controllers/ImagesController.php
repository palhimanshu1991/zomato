<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CreateImageRequest;
use App\Tasks\CreateImageTask;
use App\Restaurant;
use App\Review;
use Illuminate\Support\Facades\Storage;
use Image;
use App\Image as Photo;

class ImagesController extends Controller
{


    public function store(CreateImageRequest $request, $id)
    {
        $params = $request->all();
        $type = $params['type'];
        switch ($type) {
            case 'review':
                $instance = Review::find($id);
                break;
            case 'restaurant':
                $instance = Restaurant::find($id);
                break;
        }

        $task = (new CreateImageTask($request, $instance));
        $task->handle();
        return ['response' => "success"];

    }

    public function getImage(Request $request, $id)
    {
        $params = $request->all();
        $type = $params['type'];
        switch ($type) {
            case 'review':

                $image = Photo::where('imageable_id', $id)->where('imageable_type', 'App\Review')->first();

                $file = Storage::get($image->path);

                $image = Image::make($file);
                return $image->response();
                break;
            case 'restaurant':

                $image = Photo::where('imageable_id', $id)->where('imageable_type', 'App\Restaurant')->first();

                $file = Storage::get($image->path);

                $image = Image::make($file);
                return $image->response();
                break;
        }



    }


}