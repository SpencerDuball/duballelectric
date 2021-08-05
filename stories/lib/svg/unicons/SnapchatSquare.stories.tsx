import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { SnapchatSquare, SnapchatSquarePropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/SnapchatSquare",
  component: SnapchatSquare,
} as ComponentMeta<typeof SnapchatSquare>;

const Template: ComponentStory<typeof SnapchatSquare> = (
  args: SnapchatSquarePropsI
) => (
  <x.div display="flex" gap="20px">
    <SnapchatSquare {...args} />
    <SnapchatSquare {...args} fill="red.500" />
    <SnapchatSquare {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
