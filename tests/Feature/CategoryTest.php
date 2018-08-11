<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\User;

class CategoryTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */

    protected function setUp()
    {
        parent::setUp();

        $user = factory(User::class)->create();


        $this->actingAs($user, 'api');
    }

    public function testExample()
    {

        $this->assertTrue(true);


        $response = $this->json('GET', 'api/categories');
        $response->assertStatus(200);

        $response->json('POST', 'api/categories', ['name'=>'dndnd']);
        $response->assertStatus(200);
    }
}
