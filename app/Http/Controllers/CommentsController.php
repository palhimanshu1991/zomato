<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Review;
use App\Tasks\CreateCommentTask;
use App\Http\Requests\Reviews\CreateCommentRequest;

class CommentsController extends Controller
{
    public function createReviewComment(CreateCommentRequest $request, $id)
    {
        $review = Review::find($id);

        $task = (new CreateCommentTask($request->text, $review));
        $task->handle();

        return [
            "message" => '200'
        ];
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

}