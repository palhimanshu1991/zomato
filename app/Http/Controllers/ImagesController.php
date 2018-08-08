<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CreateImageRequest;
use App\Tasks\CreateImageTask;
use App\Restaurant;
use App\Review;
use Illuminate\Support\Facades\Storage;
use Image;

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

    public function update(Request $request, $id)
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
           // dd($instance);
        $task = (new CreateImageTask($request, $instance));
        $task->updateHandle();
        return ['response' => "success"];


    }


    public function getImage(Request $request)
    {

        $file = Storage::get('media/App/Restaurant-21.jpeg');

        $image = Image::make($file);
        return $image->response();


    }


}