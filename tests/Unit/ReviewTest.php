<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use App\Restaurant;
use App\Review;

class ReviewTest extends TestCase
{

    use DatabaseTransactions;

    protected function setUp()
    {
        parent::setUp();

        $user = factory(User::class)->create();

        $this->actingAs($user, 'api');
    }


    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_get_reviews_list()
    {
        $restaurant = Restaurant::has('reviews')->first();

        $restaurant_id = $restaurant->id;

        $response = $this->json('GET', '/api/restaurants/' . $restaurant_id);

        $response
            ->assertOk();
    }

    public function test_show_single_review()
    {
        $review = Review::first();
        $review_id = $review->id;

        $response = $this->json('GET', '/api/restaurants/' . $review_id);
        $response
            ->assertOk();
    }

    public function test_post_a_review()
    {
        $restaurant = Restaurant::has('reviews')->first();

        $restaurant_id = $restaurant->id;

        $response = $this->json('POST', '/api/reviews/' . $restaurant_id, [

            'text' => 'asdasdsd',
            'rating' => 2
        ]);

        $response->assertOk()
            ->assertJson(['message' => 200]);
    }

    public function test_post_a_comment()
    {
        $review = Review::first();

        $review_id = $review->id;

        $response = $this->json('POST', '/api/comment/'.$review_id.'?type=review', [
            'text' => 'abc'
        ])
        ->assertOk();
    }

    public function test_post_a_like()
    {
        $review = Review::first();

        $review_id = $review->id;

        $response = $this->json('POST', '/api/like/'.$review_id.'?type=review', [
            
        ])
        ->assertOk();
    }




}
