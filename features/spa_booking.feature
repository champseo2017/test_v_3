@spabookig
Feature: booking spa
  booking spa TEST_FTL_SPA_STE3

  Scenario: booking Success
    Given spa TEST_FTL_SPA_STE3 ready booking
    When I Click "input"
    When Send key "TEST_FTL_SPA_STE3"
    When Click serch "button"
    # When I should see spa title "TEST_FTL_SPA_STE3"
    When clearCookies
