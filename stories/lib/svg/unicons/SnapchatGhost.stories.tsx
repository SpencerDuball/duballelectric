import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SnapchatGhost, SnapchatGhostPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/SnapchatGhost",
  component: SnapchatGhost,
} as ComponentMeta<typeof SnapchatGhost>;

const Template: ComponentStory<typeof SnapchatGhost> = (
  args: SnapchatGhostPropsI
) => (
  <x.div display="flex" gap="20px">
    <SnapchatGhost {...args} />
    <SnapchatGhost {...args} fill="red.500" />
    <SnapchatGhost {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
