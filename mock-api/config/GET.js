module.exports = (req, res) => {
  res.status(200).json({
    uri: {
      api_gateway_uri: 'http://localhost:9000',
      auth_service_uri: 'http://localhost:9000',
    },
    roles: {
      member_role_value: 0,
      modifier_role_value: 1,
      manager_role_value: 2,
    },
    length_limitations: {
      min_group_name_length: 2,
      min_tag_length: 3,
      min_user_search_value: 2,
    },
    auth_service_token: 'friends_token',
  });
};
