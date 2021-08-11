import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { Favorite, FavoritePropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Favorite",
  component: Favorite,
} as ComponentMeta<typeof Favorite>;

const Template: ComponentStory<typeof Favorite> = (args: FavoritePropsI) => (
  <Box display="flex" gap="20px">
    <Favorite {...args} />
    <Favorite {...args} fill="red.500" />
    <Favorite {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
