import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { ExposureIncrease, ExposureIncreasePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/ExposureIncrease",
  component: ExposureIncrease,
} as ComponentMeta<typeof ExposureIncrease>;

const Template: ComponentStory<typeof ExposureIncrease> = (
  args: ExposureIncreasePropsI
) => (
  <Box display="flex" gap="20px">
    <ExposureIncrease {...args} />
    <ExposureIncrease {...args} fill="red.500" />
    <ExposureIncrease {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
