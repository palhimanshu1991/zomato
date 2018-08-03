<?php

namespace App\Http\Controllers;

use App\Comment;
use App\Http\Requests\Reviews\CreateCommentRequest;
use App\Http\Requests\Reviews\CreateRatingRequest;
use App\Http\Requests\Reviews\CreateReviewRequest;
use App\Like;
use App\Image;
use App\Review;
use App\Tasks\CreateCommentTask;
use App\Tasks\CreateLikeTask;
use Illuminate\Http\Request;
use Auth;

class ReviewsController extends Controller
{
    public function index() {
        $review = Review::all(); // paginated
        return $review; //transform
    }

    public function postRating(CreateRatingRequest $request, $id)
    {
        // find the restaurant. use the relation to add review.
    
        Review::updateOrCreate([
            'user_id' => auth()->user()->id,
            'restaurant_id' => $id
        ], [
            'rating' => $request->rating,
        ]);

        return [
            'message' => '200'
        ];
    }

    public function postReview(CreateReviewRequest $request,$id)
    {
        // find restaurant, use relation to update
        Review::updateOrCreate([
            'user_id' => auth()->user()->id,
            'restaurant_id' => $id
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
        return response()->json(['review' => $review]);
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

    // public function createPhotoComment(CreateCommentRequest $request, $id)
    // {
    //     $photo = Image::find($request->photo_id);

    //     (new CreateCommentTask($request->text, $photo))->handle();
    // }

// move this to its specific controller
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
