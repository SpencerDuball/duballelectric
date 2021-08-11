import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { TruckLoading, TruckLoadingPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/TruckLoading",
  component: TruckLoading,
} as ComponentMeta<typeof TruckLoading>;

const Template: ComponentStory<typeof TruckLoading> = (
  args: TruckLoadingPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <TruckLoading {...args} />
    <TruckLoading {...args} fill="red.500" />
    <TruckLoading {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
