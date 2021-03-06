import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Store, StorePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Store",
  component: Store,
} as ComponentMeta<typeof Store>;

const Template: ComponentStory<typeof Store> = (args: StorePropsI) => (
  <Box display="flex" gridColumnGap="20px">
    <Store {...args} />
    <Store {...args} fill="red.500" />
    <Store {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
