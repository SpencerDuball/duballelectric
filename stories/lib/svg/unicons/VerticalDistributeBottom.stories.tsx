import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import {
  VerticalDistributeBottom,
  VerticalDistributeBottomPropsI,
} from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/VerticalDistributeBottom",
  component: VerticalDistributeBottom,
} as ComponentMeta<typeof VerticalDistributeBottom>;

const Template: ComponentStory<typeof VerticalDistributeBottom> = (
  args: VerticalDistributeBottomPropsI
) => (
  <x.div display="flex" gap="20px">
    <VerticalDistributeBottom {...args} />
    <VerticalDistributeBottom {...args} fill="red.500" />
    <VerticalDistributeBottom {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
