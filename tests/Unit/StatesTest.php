<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use App\User;

class StatesTest extends TestCase
{

    use DatabaseTransactions;
    protected $address_id, $name, $email, $password;

    protected function setUp()
    {
        parent::setUp(); // TODO: Change the autogenerated stub

// $user = User::find(1);
        $user = factory(User::class)->create();

        $this->actingAs($user, 'api');
    }

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testExample()
    {
        $response = $this->json('GET', '/api/states')
            ->assertOk();
    }
}