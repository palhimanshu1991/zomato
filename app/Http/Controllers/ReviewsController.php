<?php

namespace App\Http\Controllers;

use App\Comment;
use App\Http\Requests\Reviews\CreateCommentRequest;
use App\Http\Requests\Reviews\CreateRatingRequest;
use App\Http\Requests\Reviews\CreateReviewRequest;
use App\Like;
use App\Photo;
use App\Review;
use App\Tasks\CreateCommentTask;
use App\Tasks\CreateLikeTask;
use Illuminate\Http\Request;
use Auth;

class ReviewsController extends Controller
{


    public function postRating(CreateRatingRequest $request)
    {
        Review::updateOrCreate([
            'user_id' => auth()->user()->id,
            'restaurant_id' => $request->restaurant_id
        ], [
            'rating' => $request->rating,
        ]);

        return [
            'message' => '200'
        ];
    }

    public function postReview(CreateReviewRequest $request)
    {
        Review::updateOrCreate([
            'user_id' => auth()->user()->id,
            'restaurant_id' => $request->restaurant_id
        ], [
            'text' => $request->text,
        ]);

        return [
            'message' => '200'
        ];
    }


    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $review = Review::find($id);
        return $review->load('comments', 'likes', 'user', 'restaurant');
    }


    public function createReviewComment(CreateCommentRequest $request, $id)
    {
        $review = Review::find($id);

        $task = (new CreateCommentTask($request->text, $review));
        $task->handle();

        return [
            "message" => '200'
        ];
    }

    public function createPhotoComment(CreateCommentRequest $request, $id)
    {
        $photo = Photo::find($request->photo_id);

        (new CreateCommentTask($request->text, $photo))->handle();
    }


    public function createReviewLike($id)
    {
        $review = Review::find($id);

        $task = new CreateLikeTask($review);
        $task->handle();

        return [
            "message" => '200'
        ];


    }
}
