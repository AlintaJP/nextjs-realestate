import { Box } from '@chakra-ui/react';

const Footer = () => (
  <Box
    align="center"
    p="5"
    color="gray.600"
    borderTop="1px"
    borderColor="gray.100"
  >
    {new Date(Date.now()).getFullYear()} Realtor, Inc.
  </Box>
);

export default Footer;
