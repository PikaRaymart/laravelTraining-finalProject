<?php
use Srmklive\PayPal\Services\PayPal as PayPalClient;

if (!function_exists("paypalCreateOorder")) {
  /**
   * orders = {
   *   quantity: number,
   *   book: Book
   * }[]
   * 
   */
  function paypalCreateOrder($orders, $returnUrl, $cancelUrl) {
    $provider = new PayPalClient();
		$provider->setApiCredentials(config('paypal'));
		$paypalToken = $provider->getAccessToken();
    $ordersValue = array_reduce($orders, function($accu, $curr) {
      return $accu + $curr["book"]->price * $curr["quantity"];
    }, 0);
    
    return $provider->createOrder([
			"intent" => "CAPTURE",
			"application_context" => [
				"return_url" => route($returnUrl),
				"cancel_url" => route($cancelUrl),
			],
			"purchase_units" => [
				0 => [
					"amount" => [
						"currency_code" => "PHP",
						"value" => $ordersValue + 50,
            "breakdown" => [
              "item_total" => [
                "currency_code" => "PHP",
                "value" => $ordersValue,
              ],
              "shipping" => [
                "currency_code" => "PHP",
                "value" => "50"
              ]
            ]
          ],
          "items" => array_map(function($order) {
            return [
              "name" => $order["book"]->title,
              "unit_amount" => [
                "currency_code" => "PHP",
                "value" => $order["book"]->price
              ],
              "quantity" => $order["quantity"]
            ];
          }, $orders)
				]
			]
    ]);
  }
}