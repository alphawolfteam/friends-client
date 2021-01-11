const config = {
  uri: {
    api_gateway_uri: 'http://localhost:3002',
    auth_service_uri: 'http://localhost:3003',
    config_service_uri: 'http://localhost:3001',
  },
  roles_objects: [
    { role: 'member', displayName: 'חבר/ה', value: 0 },
    { role: 'manager', displayName: 'מנהל/ת', value: 2 },
  ],
  length_limitations: {
    min_group_name_length: 2,
    min_tag_length: 2,
    min_user_search_value: 2,
  },
  auth_service_token: 'friends-token',
};

export default config;
