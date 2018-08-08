<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Review;
use App\Tasks\CreateCommentTask;
use App\Http\Requests\Reviews\CreateCommentRequest;
use App\Restaurant;

class CommentsController extends Controller
{
    public function createReviewComment(CreateCommentRequest $request, $id)
    {



        $params = $request->all();
        $type = $params['type'];
        switch ($type) {
            case 'review':
                $review = Review::find($id);

                $task = (new CreateCommentTask($request->text, $review));
                $task->handle();

                return [
                    "message" => '200'
                ];

                break;
            case 'image':
                $image = Image::find($id);

                $task = (new CreateCommentTask($request->text, $image));
                $task->handle();

                return [
                    "message" => '200'
                ];

                break;


        }
    }



}
