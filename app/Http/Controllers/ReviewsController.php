<?php

namespace App\Http\Controllers;

use App\Comment;
use App\Http\Requests\CreateReviewRequest;
use App\Photo;
use App\Review;
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
        $auth = Auth::user();
        $review = new Review;
        $review->rating = $request->rating;
        $review->restaurant_id = $request->restaurant_id;
        $review->user_id = $auth->id;
        $review->save();

        if ($request->photo) {
            $photo = new Photo;
            $photo->path = $request->path;
            $review->photos()->save([2]);
        }

        return response()->json(['success' => 'Created'], 200);
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

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }


    public function comment(CreateCommentRequest $request, $id)
    {
        $review = Review::find($id);
        $comment = new Comment;
        $comment->text = $request->text;
        $review->comments()->save($comment);
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
