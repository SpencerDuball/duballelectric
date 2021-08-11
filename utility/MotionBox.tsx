import { Box, BoxProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

// 1. Create a custom motion component from Box
export const MotionBox = motion<BoxProps>(Box);
