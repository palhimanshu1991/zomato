<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateUserAddressRequest;
use App\UserAddress;
use Illuminate\Http\Request;
use App\Address;

class UserAddressController extends Controller
{
     public function index()
     {
         $userAddress = UserAddress::with(['address','address.state','address.district'])->where('user_id',auth()->user()->id)->get();
         return response()->json(['address' => $userAddress]);
         
     }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateUserAddressRequest $request)
    {
        $address = Address::create([
            'street' => $request->street,
            'locality' => $request->locality,
            'landmark' => $request->landmark,
            'pincode' => $request->pincode,
            'state_id' => $request->state_id,
            'district_id' => $request->district_id
        ]);

        $userAddress = UserAddress::create([
            'title' => $request->title,
            'user_id' => auth()->user()->id,
            'address_id' => $address->id
        ]);

        return response()->json(["success"=>200,"message"=>"Created"]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $userAddress = UserAddress::find($id);
        $address = Address::find($userAddress->address_id);
        return response()->json(['title'=> $userAddress->title,'address'=>$address]);
         
    }

    public function update(Request $request, $id)
    {
        $address = Address::find($id);
        $address->street = $request->street;
        $address->locality = $request->locality;
        $address->landmark = $request->landmark;
        $address->pincode = $request->pincode;
        $address->state_id = $request->state_id;
        $address->district_id = $request->district_id;
        $address->save();

        $userAddress = UserAddress::find($id);
        $userAddress->title = $request->title;
        $userAddress->save();

    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $userAddress = UserAddress::find($id);
        $userAddress->delete;
        return response()->json(["message"=>"Success","success"=>200]);
    }
}
