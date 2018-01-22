class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true, uniqueness:true;
    validates :password, length: {minimum: 6, allow_nil: true}

    attr_reader :password

    has_many :favorites

    after_initialize :ensure_session_token

    def self.find_by_credentials(username,password)
      user = User.find_by(username: username)
      return nil unless user && user.is_password?(password)
      user
    end

    #uses Bycrypt generate the real password from the password_digest
    #then compares to the real password
    def is_password?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    #creates a password_digest from user's inputted password
    def password=(password)
      @password = password
      self.password_digest = BCrypt::Password.create(password)
    end

    def reset_token
      self.session_token = SecureRandom.urlsafe_base64(16)
      self.save!
      self.session_token
    end

    def ensure_session_token
      self.session_token ||= SecureRandom.urlsafe_base64(16)
    end

end
