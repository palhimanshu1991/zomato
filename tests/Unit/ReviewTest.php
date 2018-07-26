<?php

namespace Tests\Unit;

use App\Review;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ReviewTest extends TestCase
{
    public function test_rating_creation()
    {
        // data
        // make http request
        // assert // check

        $data = [
            'user_id' => 1,
            'restaurant_id' => 1,
            'rating' => 3
        ];

        dd($this->get('api/reviews', $data));

        $review = Review::first();

        $this->assertEquals($review->user_id, 1);
        $this->assertEquals($review->restaurant_id, 1);
    }
}
