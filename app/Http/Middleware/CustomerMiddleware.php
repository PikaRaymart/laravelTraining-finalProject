<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;


class CustomerMiddleware{
	/**
	 * Handle an incoming request.
	 *
	 * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
	 */
	public function handle(Request $request, Closure $next): Response{
    $user = $request->user();

    if ($user && $user->tokenCan("customer")) {
      return $next($request);
    }

    return response()->json(["message" => "Unauthorized access."], 401);
	}
}
