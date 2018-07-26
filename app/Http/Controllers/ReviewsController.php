<?php

namespace App\Http\Controllers;

use App\Comment;
use App\Http\Requests\CreateCommentRequest;
use App\Http\Requests\CreateReviewRequest;
use App\Photo;
use App\Review;
use App\Tasks\CreateCommentTask;
use Illuminate\Http\Request;
use Auth;

class ReviewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $reviews = Review::with(['comments', 'likes', 'user', 'restaurant', 'photos']);
        return $reviews->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateReviewRequest $request)
    {

    }


    public function postRating(Request $request)
    {
        Review::firstOrCreate([
            'user_id' => $request->user_id,
            'restaurant_id' => $request->restaurant_id
        ], [
            'rating' => $request->rating,
        ]);

        return [
            'message' => '200'
        ];
    }

    public function postReview(Request $request)
    {
        Review::firstOrCreate([
            'user_id' => $request->id,
            'restaurant_id' => $request->restaurant_id
        ], [
            'review' => $request->review,
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
        return $review::with(['comments', 'likes', 'user', 'restaurants', 'photos'])->get();
    }




    public function createReviewComment(CreateCommentRequest $request, $id)
    {
        $review = Review::find($request->review_id);

        $task = (new CreateCommentTask($request->text, $review));
    }

    public function createPhotoComment(CreateCommentRequest $request, $id)
    {
        $photo = Photo::find($request->photo_id);

        (new CreateCommentTask($request->text, $photo))->handle();
    }


    public function like($id)
    {
        $review = Review::find($id);
        $like = new like;
        $auth = Auth::user();
        $like->user_id = $auth->id;
        $review->likes()->save($like);
    }
}
