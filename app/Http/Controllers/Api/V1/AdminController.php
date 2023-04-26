<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminController extends Controller {

  function createAdmin(Request $request) {
    $appPassword = $request->input("appPassword");

    
  }

	public function index(){

	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(){
    return [];
  }

	/**
	 * Display the specified resource.
	 */
	public function show(){
	}

	/**
	 * Show the form for editing the specified resource.
	 */
	public function edit(){
		//
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(){
		
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(){
		//
	}
};