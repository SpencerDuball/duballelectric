import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { VisualStudio, VisualStudioPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/VisualStudio",
  component: VisualStudio,
} as ComponentMeta<typeof VisualStudio>;

const Template: ComponentStory<typeof VisualStudio> = (
  args: VisualStudioPropsI
) => (
  <x.div display="flex" gap="20px">
    <VisualStudio {...args} />
    <VisualStudio {...args} fill="red.500" />
    <VisualStudio {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
