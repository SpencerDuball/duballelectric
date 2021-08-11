import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Docker, DockerPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Docker",
  component: Docker,
} as ComponentMeta<typeof Docker>;

const Template: ComponentStory<typeof Docker> = (args: DockerPropsI) => (
  <Box display="flex" gap="20px">
    <Docker {...args} />
    <Docker {...args} fill="red.500" />
    <Docker {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
