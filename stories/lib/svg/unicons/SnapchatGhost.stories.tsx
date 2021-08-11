import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { SnapchatGhost, SnapchatGhostPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/SnapchatGhost",
  component: SnapchatGhost,
} as ComponentMeta<typeof SnapchatGhost>;

const Template: ComponentStory<typeof SnapchatGhost> = (
  args: SnapchatGhostPropsI
) => (
  <Box display="flex" gap="20px">
    <SnapchatGhost {...args} />
    <SnapchatGhost {...args} fill="red.500" />
    <SnapchatGhost {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
