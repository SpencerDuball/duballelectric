import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Moon, MoonPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Moon",
  component: Moon,
} as ComponentMeta<typeof Moon>;

const Template: ComponentStory<typeof Moon> = (args: MoonPropsI) => (
  <Box display="flex" gap="20px">
    <Moon {...args} />
    <Moon {...args} fill="red.500" />
    <Moon {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
