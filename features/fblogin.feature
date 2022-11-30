Feature:  Facebook Login test 
    Background Login
        Given Sourav opens facebook page and enter username
    @0001
    Scenario: Sourav login to the facebook
        When Sourav enters password
        When click the login button 
        Then Sourav sees the facebook main page having notification button
        