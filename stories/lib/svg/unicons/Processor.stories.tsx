import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Processor, ProcessorPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Processor",
  component: Processor,
} as ComponentMeta<typeof Processor>;

const Template: ComponentStory<typeof Processor> = (args: ProcessorPropsI) => (
  <Box display="flex" gap="20px">
    <Processor {...args} />
    <Processor {...args} fill="red.500" />
    <Processor {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
