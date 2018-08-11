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
use App\Contracts\Commentable;

class ReviewsController extends Controller
{
    public function index($restaurant_id)
    {
        $reviews = Review::where('restaurant_id', $restaurant_id)->with(['comments', 'user'])->withCount('likes')->get();
        return response()->json(['review' => $reviews]);
    }



    public function postReview(CreateReviewRequest $request, $restaurant_id)
    {
        
        $review = Review::updateOrCreate([
            'user_id' => auth()->user()->id,
            'restaurant_id' => $restaurant_id
        ], [
            'rating' => $request->rating,
            'text' => $request->text,
        ]);

        return [
            'message' => '200',
            'id' => $review->id
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

        $review = Review::where('id', $id)->with(['comments', 'user'])->withCount('likes')->first();

        return response()->json(['review' => $review]);
    }







}
