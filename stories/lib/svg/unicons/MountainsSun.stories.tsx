import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { MountainsSun, MountainsSunPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/MountainsSun",
  component: MountainsSun,
} as ComponentMeta<typeof MountainsSun>;

const Template: ComponentStory<typeof MountainsSun> = (
  args: MountainsSunPropsI
) => (
  <Box display="flex" gap="20px">
    <MountainsSun {...args} />
    <MountainsSun {...args} fill="red.500" />
    <MountainsSun {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
