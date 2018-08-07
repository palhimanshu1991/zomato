<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CreateImageRequest;
use App\Tasks\CreateImageTask;
use App\Restaurant;
use App\Review;

class ImagesController extends Controller
{


    public function createImage(CreateImageRequest $request, $id)
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


}