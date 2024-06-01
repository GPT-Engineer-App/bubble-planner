import { Container, Text, VStack, Box, Input, Button, HStack, IconButton, Avatar, Badge, SimpleGrid, Image } from "@chakra-ui/react";
import { FaSearch, FaUser, FaCalendarAlt, FaCreditCard, FaComments, FaClipboardCheck, FaTachometerAlt, FaUserShield } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={8} width="100%">
        <Text fontSize="4xl" fontWeight="bold">
          Driving School App
        </Text>
        <Text fontSize="xl">Plan and manage your driving lessons with ease.</Text>

        <Box width="100%">
          <Text fontSize="2xl" mb={4}>
            Search Instructors
          </Text>
          <HStack spacing={4}>
            <Input placeholder="Enter city or location" size="lg" />
            <IconButton aria-label="Search" icon={<FaSearch />} size="lg" />
          </HStack>
        </Box>

        <Box width="100%">
          <Text fontSize="2xl" mb={4}>
            Top Instructors
          </Text>
          <SimpleGrid columns={[1, 2, 3]} spacing={8}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <HStack spacing={4}>
                <Avatar name="John Doe" src="https://images.unsplash.com/photo-1642903642741-4374811a84aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbnN0cnVjdG9yJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzE3MjM0NDM5fDA&ixlib=rb-4.0.3&q=80&w=1080" />
                <VStack align="start">
                  <Text fontWeight="bold">John Doe</Text>
                  <HStack>
                    <Badge colorScheme="green">4.5</Badge>
                    <Text>Rating</Text>
                  </HStack>
                </VStack>
              </HStack>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <HStack spacing={4}>
                <Avatar name="Jane Smith" src="https://images.unsplash.com/photo-1544168190-79c17527004f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxpbnN0cnVjdG9yJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzE3MjM0NDM5fDA&ixlib=rb-4.0.3&q=80&w=1080" />
                <VStack align="start">
                  <Text fontWeight="bold">Jane Smith</Text>
                  <HStack>
                    <Badge colorScheme="green">4.7</Badge>
                    <Text>Rating</Text>
                  </HStack>
                </VStack>
              </HStack>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <HStack spacing={4}>
                <Avatar name="Mike Johnson" src="https://images.unsplash.com/photo-1642903643456-cef0da2f13a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxpbnN0cnVjdG9yJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzE3MjM0NDM5fDA&ixlib=rb-4.0.3&q=80&w=1080" />
                <VStack align="start">
                  <Text fontWeight="bold">Mike Johnson</Text>
                  <HStack>
                    <Badge colorScheme="green">4.8</Badge>
                    <Text>Rating</Text>
                  </HStack>
                </VStack>
              </HStack>
            </Box>
          </SimpleGrid>
        </Box>

        <Box width="100%">
          <Text fontSize="2xl" mb={4}>
            Features
          </Text>
          <SimpleGrid columns={[1, 2, 3]} spacing={8}>
            <VStack>
              <IconButton aria-label="User Registration" icon={<FaUser />} size="lg" isRound />
              <Text>User Registration and Authentication</Text>
            </VStack>
            <VStack>
              <IconButton aria-label="Booking" icon={<FaCalendarAlt />} size="lg" isRound />
              <Text>Online Booking and Scheduling</Text>
            </VStack>
            <VStack>
              <IconButton aria-label="Payment" icon={<FaCreditCard />} size="lg" isRound />
              <Text>Payment Gateway Integration</Text>
            </VStack>
            <VStack>
              <IconButton aria-label="Chat" icon={<FaComments />} size="lg" isRound />
              <Text>In-App Chat for Communication</Text>
            </VStack>
            <VStack>
              <IconButton aria-label="License" icon={<FaClipboardCheck />} size="lg" isRound />
              <Text>License Issuance Tracking</Text>
            </VStack>
            <VStack>
              <IconButton aria-label="Dashboard" icon={<FaTachometerAlt />} size="lg" isRound />
              <Text>User Dashboard</Text>
            </VStack>
            <VStack>
              <IconButton aria-label="Admin Panel" icon={<FaUserShield />} size="lg" isRound />
              <Text>Admin Panel for Managing Instructors and Users</Text>
            </VStack>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
