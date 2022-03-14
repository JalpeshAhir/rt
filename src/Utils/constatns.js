import React from "react";

const BaseUrl = "https://applified.co.in/medex/api/v1/";

export const accept_header = "application/x.medex.v1+json"

export const login_url = BaseUrl + "login";
export const signup_url = BaseUrl + "register";
export const home_url = BaseUrl + "get-home/ogb8lqhucul09jtdkoh6";
export const products_url = BaseUrl + "new-product/";
export const single_product_url = BaseUrl + "new-product-detail/";
export const add_wishlist_url = BaseUrl + "all-wishlist";
export const place_order_url = BaseUrl + "new-place-order";
export const add_address_url = BaseUrl + "add-address";
export const get_countries = BaseUrl + "countries";
export const get_state = BaseUrl + "state";
export const get_cities = BaseUrl + "cities";
export const get_address = BaseUrl + "view-address";
export const delete_address = BaseUrl + "delete-address";
export const edit_address_url = BaseUrl + "edit-address";
export const guest_ordet_url = BaseUrl + "new-place-order-guest";
export const get_ordet_url = BaseUrl + "get-order-list";
export const get_customer_details_url = BaseUrl + "customers-detail";
export const update_customer_details_url = BaseUrl + "update-profile";
export const get_order_details_url = BaseUrl + "get-order-detail/";
export const return_order_url = BaseUrl + "return";
export const download_invoice_url = BaseUrl + "download-invoice";
export const create_store_ticket = BaseUrl + "store-ticket";
export const store_ticket_view_url = BaseUrl + "store-ticket-view";
export const contact_us = BaseUrl + "contact-us";