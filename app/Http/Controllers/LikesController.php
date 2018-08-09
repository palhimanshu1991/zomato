<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Review;
use App\Tasks\CreateLikeTask;
use App\Image;

class LikesController extends Controller
{
    public function createReviewLike(Request $request, $id)
    {
        $params = $request->all();
        $type = $params['type'];

        switch ($type) {
            case 'review':
                $review = Review::find($id);


                $task = new CreateLikeTask($review);
                $task->handle();

                return [
                    "message" => '200',
                    "success" => 'liked'
                ];
                break;

                case 'image':
                $image = Image::find($id);


                $task = new CreateLikeTask($review);
                $task->handle();

                return [
                    "message" => '200',
                    "success" => 'liked'
                ];
                break;    

        }





    }





    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
