require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get how_to_work" do
    get :how_to_work
    assert_response :success
  end

  test "should get faq" do
    get :faq
    assert_response :success
  end

end
